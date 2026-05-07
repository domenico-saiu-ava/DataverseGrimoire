---
logical: "msdyn_sessionextension"
display: "Session Analytics"
entitySetName: "msdyn_sessionextensions"
primaryId: "msdyn_sessionextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Session Analytics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionextension` |
| Display name | Session Analytics |
| Display (plural) | Session Analytics |
| Schema name | `msdyn_sessionextension` |
| Entity set (Web API) | `msdyn_sessionextensions` |
| Primary id attribute | `msdyn_sessionextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionextensions(<guid>)
POST /api/data/v9.2/msdyn_sessionextensions
PATCH /api/data/v9.2/msdyn_sessionextensions(<guid>)
DELETE /api/data/v9.2/msdyn_sessionextensions(<guid>)
```

## Attributes

Writable: **28** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AdditionalMetadata`, `msdyn_CallbackAcceptedTime`, `msdyn_CallbackCustomerAddedTime`, `msdyn_IntentFamilyID`, `msdyn_IntentGroupID`, `msdyn_IntentID`, `msdyn_IntentString`, `msdyn_IsEngaged`, `msdyn_Name`, `msdyn_ocliveworkitemid`, `msdyn_ocsessionid`, `msdyn_Outcome`, `msdyn_OutcomeReason`, `msdyn_OverflowAction`, `msdyn_OverflowCondition`, `msdyn_OverflowTriggerTimestamp`, `msdyn_RoutingType`, `msdyn_sessionextensionId`, `msdyn_sessionid`, `msdyn_SourceIntentCalculation`, `msdyn_UserType`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_sessionextension_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_sessionextension_sessionid_msdyn_ocsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `organization_msdyn_sessionextension` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sessionextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sessionextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sessionextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sessionextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sessionextension.md) on 2026-05-06.