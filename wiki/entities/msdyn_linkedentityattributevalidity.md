---
logical: "msdyn_linkedentityattributevalidity"
display: "Linked Entity Attribute Validity"
entitySetName: "msdyn_linkedentityattributevalidiations"
primaryId: "msdyn_linkedentityattributevalidityid"
primaryName: "msdyn_attributename"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Linked Entity Attribute Validity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_linkedentityattributevalidity` |
| Display name | Linked Entity Attribute Validity |
| Display (plural) | Linked Entity Attribute Validations |
| Schema name | `msdyn_linkedentityattributevalidity` |
| Entity set (Web API) | `msdyn_linkedentityattributevalidiations` |
| Primary id attribute | `msdyn_linkedentityattributevalidityid` |
| Primary name attribute | `msdyn_attributename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_linkedentityattributevalidiations?$select=msdyn_attributename&$top=10
GET /api/data/v9.2/msdyn_linkedentityattributevalidiations(<guid>)
POST /api/data/v9.2/msdyn_linkedentityattributevalidiations
PATCH /api/data/v9.2/msdyn_linkedentityattributevalidiations(<guid>)
DELETE /api/data/v9.2/msdyn_linkedentityattributevalidiations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_attributename`, `msdyn_attributetype`, `msdyn_datahash`, `msdyn_datavalidity`, `msdyn_errorcode`, `msdyn_linkedentityattributevalidityId`, `msdyn_linkeditemlookup`, `msdyn_linkeditemlookupIdType`, `msdyn_validationresponse`, `msdyn_validationstatus`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_linkedentityattributevalidity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_linkedentityattributevalidity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_linkedentityattributevalidity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_linkedentityattributevalidity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_linkeditemvalidity_polymorphic_contactid` | [contact](contact.md) | `msdyn_linkeditemlookup` | `msdyn_linkeditemlookup_contact` |
| `msdyn_linkeditemvalidity_polymorphic_leadid` | [lead](lead.md) | `msdyn_linkeditemlookup` | `msdyn_linkeditemlookup_lead` |
| `organization_msdyn_linkedentityattributevalidity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_linkedentityattributevalidity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_linkedentityattributevalidity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_linkedentityattributevalidity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_linkedentityattributevalidity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_linkedentityattributevalidity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_linkedentityattributevalidity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_linkedentityattributevalidity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_linkedentityattributevalidity.md) on 2026-05-06.