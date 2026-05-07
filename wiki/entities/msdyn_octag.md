---
logical: "msdyn_octag"
display: "Tag"
entitySetName: "msdyn_octags"
primaryId: "msdyn_octagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Tag

Tags for quick categorization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_octag` |
| Display name | Tag |
| Display (plural) | tags |
| Schema name | `msdyn_octag` |
| Entity set (Web API) | `msdyn_octags` |
| Primary id attribute | `msdyn_octagid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_octags?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_octags(<guid>)
POST /api/data/v9.2/msdyn_octags
PATCH /api/data/v9.2/msdyn_octags(<guid>)
DELETE /api/data/v9.2/msdyn_octags(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_octagId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_octag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_octag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_octag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_octag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_octag` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_octag_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_octag_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_octag_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_octag_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_octag_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_octag_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_msdyn_octag` | [msdyn_octagid](msdyn_octagid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_ocrichobject_msdyn_octag` | [msdyn_octagid](msdyn_octagid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_personalmessage_msdyn_octag` | [msdyn_octagid](msdyn_octagid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_octag.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_octag.md) on 2026-05-06.