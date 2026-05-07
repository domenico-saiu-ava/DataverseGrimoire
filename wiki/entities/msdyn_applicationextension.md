---
logical: "msdyn_applicationextension"
display: "Application Extension"
entitySetName: "msdyn_applicationextensions"
primaryId: "msdyn_applicationextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Application Extension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_applicationextension` |
| Display name | Application Extension |
| Display (plural) | Application Extensions |
| Schema name | `msdyn_applicationextension` |
| Entity set (Web API) | `msdyn_applicationextensions` |
| Primary id attribute | `msdyn_applicationextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_applicationextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_applicationextensions(<guid>)
POST /api/data/v9.2/msdyn_applicationextensions
PATCH /api/data/v9.2/msdyn_applicationextensions(<guid>)
DELETE /api/data/v9.2/msdyn_applicationextensions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appconfig_relationshipname`, `msdyn_applicationextensionId`, `msdyn_name`, `msdyn_relationship_cardinality`, `msdyn_type`, `msdyn_UniqueName`, `msdyn_webresource_url`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_applicationextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_applicationextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_applicationextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_applicationextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_applicationextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_applicationextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_applicationextension` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_applicationextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_applicationextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_applicationextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_applicationextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_applicationextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_applicationextension` | [msdyn_applicationextensionid](msdyn_applicationextensionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_applicationextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_applicationextension.md) on 2026-05-06.