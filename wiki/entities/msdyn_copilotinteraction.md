---
logical: "msdyn_copilotinteraction"
display: "Copilot Interaction"
entitySetName: "msdyn_copilotinteractions"
primaryId: "msdyn_copilotinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Interaction

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteraction` |
| Display name | Copilot Interaction |
| Display (plural) | Copilot Interactions |
| Schema name | `msdyn_copilotinteraction` |
| Entity set (Web API) | `msdyn_copilotinteractions` |
| Primary id attribute | `msdyn_copilotinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractions(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractions
PATCH /api/data/v9.2/msdyn_copilotinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_clienttimestamp`, `msdyn_copilotinteractionId`, `msdyn_interactioncontext`, `msdyn_interactiondataid`, `msdyn_interactionforid`, `msdyn_interactionforlogicalname`, `msdyn_interactiontype`, `msdyn_name`, `msdyn_scenariorequestid`, `msdyn_scenariotype`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_copilotinteractiondata_msdyn_copilotinteraction_interactiondataid` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `msdyn_interactiondataid` | `msdyn_interactiondataid` |
| `organization_msdyn_copilotinteraction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteraction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteraction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteraction_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotinteraction_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotinteraction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteraction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotinteraction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteraction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotinteraction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotinteraction.md) on 2026-05-06.