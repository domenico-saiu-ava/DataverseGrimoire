---
logical: "powerpagesite"
display: "Site"
entitySetName: "powerpagesites"
primaryId: "powerpagesiteid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Site

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesite` |
| Display name | Site |
| Display (plural) | Sites |
| Schema name | `powerpagesite` |
| Entity set (Web API) | `powerpagesites` |
| Primary id attribute | `powerpagesiteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesites?$select=name&$top=10
GET /api/data/v9.2/powerpagesites(<guid>)
POST /api/data/v9.2/powerpagesites
PATCH /api/data/v9.2/powerpagesites(<guid>)
DELETE /api/data/v9.2/powerpagesites(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`content`, `datamodelversion`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerpagesiteId`, `powerpagesitetype`, `primarydomainname`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesite` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpagesite_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesite_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesite_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesite_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesite` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerpagesite` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesite` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesite_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesite_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesite_mspp_websiteid_adx_invitation` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `powerpagesite_powerpagecomponent_powerpagesiteid` | _n/a_ | `powerpagesiteid` | _n/a_ |
| `powerpagesite_powerpagesitelanguage_powerpagesiteid` | _n/a_ | `powerpagesiteid` | _n/a_ |
| `powerpagesite_powerpagesitepublished_powerpagesiteid` | _n/a_ | `powerpagesiteid` | _n/a_ |
| `powerpagesite_powerpagessourcefile_powerpagesiteid` | _n/a_ | `powerpagesiteid` | _n/a_ |
| `powerpagesite_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesite_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesite_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | [powerpagesiteid](powerpagesiteid.md) | _n/a_ | _n/a_ |
| `powerpagesite_dvtablesearch` | [powerpagesiteid](powerpagesiteid.md) | _n/a_ | _n/a_ |

## Source

Generated from [powerpagesite.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesite.md) on 2026-05-06.