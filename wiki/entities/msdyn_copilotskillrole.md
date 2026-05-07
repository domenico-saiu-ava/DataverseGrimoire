---
logical: "msdyn_copilotskillrole"
display: "Copilot Skill Role"
entitySetName: "msdyn_copilotskillroles"
primaryId: "msdyn_copilotskillroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Skill Role

Stores mapping between Copilot skill and roles.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotskillrole` |
| Display name | Copilot Skill Role |
| Display (plural) | Copilot Skill Roles |
| Schema name | `msdyn_copilotskillrole` |
| Entity set (Web API) | `msdyn_copilotskillroles` |
| Primary id attribute | `msdyn_copilotskillroleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotskillroles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotskillroles(<guid>)
POST /api/data/v9.2/msdyn_copilotskillroles
PATCH /api/data/v9.2/msdyn_copilotskillroles(<guid>)
DELETE /api/data/v9.2/msdyn_copilotskillroles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_copilotskillid`, `msdyn_copilotskillroleId`, `msdyn_name`, `msdyn_roleid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotskillrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotskillrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotskillrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotskillrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillrole_copilotskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskillid` | `msdyn_copilotskillid` |
| `msdyn_role_msdyn_copilotskillrole_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_roleid` |
| `organization_msdyn_copilotskillrole` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotskillrole_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskillrole_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskillrole_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotskillrole_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotskillrole_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskillrole_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotskillrole_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotskillrole_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotskillrole.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotskillrole.md) on 2026-05-06.