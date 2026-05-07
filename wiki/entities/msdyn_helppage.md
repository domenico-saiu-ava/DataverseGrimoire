---
logical: "msdyn_helppage"
display: "Help Page"
entitySetName: "msdyn_helppages"
primaryId: "msdyn_helppageid"
primaryName: "msdyn_displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Help Page

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_helppage` |
| Display name | Help Page |
| Display (plural) | Help Pages |
| Schema name | `msdyn_helppage` |
| Entity set (Web API) | `msdyn_helppages` |
| Primary id attribute | `msdyn_helppageid` |
| Primary name attribute | `msdyn_displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_helppages?$select=msdyn_displayname&$top=10
GET /api/data/v9.2/msdyn_helppages(<guid>)
POST /api/data/v9.2/msdyn_helppages
PATCH /api/data/v9.2/msdyn_helppages(<guid>)
DELETE /api/data/v9.2/msdyn_helppages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_content`, `msdyn_contenttype`, `msdyn_displayname`, `msdyn_helppageId`, `msdyn_locale`, `msdyn_path`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_helppage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_helppage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_helppage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_helppage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_helppage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_helppage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_helppage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_helppage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_helppage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_helppage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_helppage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_helppage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_helppage.md) on 2026-05-06.