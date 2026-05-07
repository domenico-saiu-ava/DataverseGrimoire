---
logical: "msdyn_personasecurityrolemapping"
display: "Persona Security Role Mapping"
entitySetName: "msdyn_personasecurityrolemappings"
primaryId: "msdyn_personasecurityrolemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Persona Security Role Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personasecurityrolemapping` |
| Display name | Persona Security Role Mapping |
| Display (plural) | Persona Security Role Mappings |
| Schema name | `msdyn_personasecurityrolemapping` |
| Entity set (Web API) | `msdyn_personasecurityrolemappings` |
| Primary id attribute | `msdyn_personasecurityrolemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personasecurityrolemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
POST /api/data/v9.2/msdyn_personasecurityrolemappings
PATCH /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
DELETE /api/data/v9.2/msdyn_personasecurityrolemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_personasecurityrolemappingId`, `msdyn_PersonaType`, `msdyn_SecurityRoleId`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_personasecurityrolemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personasecurityrolemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personasecurityrolemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personasecurityrolemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_role_msdyn_personasecurityrolemapping` | [role](role.md) | `msdyn_securityroleid` | `msdyn_SecurityRoleId` |
| `organization_msdyn_personasecurityrolemapping` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personasecurityrolemapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personasecurityrolemapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personasecurityrolemapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_personasecurityrolemapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_personasecurityrolemapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_personasecurityrolemapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personasecurityrolemapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_personasecurityrolemapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_personasecurityrolemapping.md) on 2026-05-06.