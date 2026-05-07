---
logical: "msdyn_linkedentityattributevalidity"
display: "Validità attributo entità collegata"
entitySetName: "msdyn_linkedentityattributevalidiations"
primaryId: "msdyn_linkedentityattributevalidityid"
primaryName: "msdyn_attributename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Validità attributo entità collegata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_linkedentityattributevalidity` |
| Display name | Validità attributo entità collegata |
| Display (plural) | Convalide attributo entità collegata |
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

Writable: **15** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_attributename`, `msdyn_attributetype`, `msdyn_datahash`, `msdyn_datavalidity`, `msdyn_errorcode`, `msdyn_linkedentityattributevalidityid`, `msdyn_linkeditemlookup`, `msdyn_validationresponse`, `msdyn_validationstatus`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_linkedentityattributevalidity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_linkedentityattributevalidity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_linkedentityattributevalidity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_linkedentityattributevalidity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_linkedentityattributevalidity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_linkeditemvalidity_polymorphic_leadid` | [lead](lead.md) | `msdyn_linkeditemlookup` | `msdyn_linkeditemlookup_lead` |
| `msdyn_linkeditemvalidity_polymorphic_contactid` | [contact](contact.md) | `msdyn_linkeditemlookup` | `msdyn_linkeditemlookup_contact` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_linkedentityattributevalidity_SyncErrors` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `regardingobjectid` | `regardingobjectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_AsyncOperations` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `regardingobjectid` | `regardingobjectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_MailboxTrackingFolders` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `regardingobjectid` | `regardingobjectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_UserEntityInstanceDatas` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `objectid` | `objectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_ProcessSession` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `regardingobjectid` | `regardingobjectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_BulkDeleteFailures` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `regardingobjectid` | `regardingobjectid_msdyn_linkedentityattributevalidity` |
| `msdyn_linkedentityattributevalidity_PrincipalObjectAttributeAccesses` | [msdyn_linkedentityattributevalidity](msdyn_linkedentityattributevalidity.md) | `objectid` | `objectid_msdyn_linkedentityattributevalidity` |


## Source

Generated from [msdyn_linkedentityattributevalidity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_linkedentityattributevalidity')) on 2026-05-07.